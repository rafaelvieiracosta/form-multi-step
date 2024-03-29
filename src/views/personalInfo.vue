<template>
  <section id="personalInfo" class="section">
    <h1 class="section-title">Informações pessoais</h1>
    <p class="section-description">
      Por favor, forneça seu nome, e-mail e telefone.
    </p>

    <form class="section-form" autocomplete="off">
      <label for="name" class="section-form-item">
        <div class="section-form-item-text">
          <p class="section-form-item-text-indicator">Nome</p>
          <transition name="error">
            <p class="section-form-item-text-error" v-if="errorName">
              {{ errorName }}
            </p>
          </transition>
        </div>

        <input
          id="name"
          type="text"
          class="section-form-item-input"
          :class="{ error: errorName }"
          placeholder="Ex: Gustavo Ohashi"
          v-model="name"
          @focusout="checkName()"
        />
      </label>

      <label for="email" class="section-form-item">
        <div class="section-form-item-text">
          <p class="section-form-item-text-indicator">Email</p>
          <transition name="error">
            <p class="section-form-item-text-error" v-if="errorEmail">
              {{ errorEmail }}
            </p>
          </transition>
        </div>

        <input
          id="email"
          type="email"
          class="section-form-item-input"
          :class="{ error: errorEmail }"
          placeholder="Ex: gustavo.ohashi@outlook.com"
          v-model="email"
          @focusout="checkEmail()"
        />
      </label>

      <label for="phone" class="section-form-item">
        <div class="section-form-item-text">
          <p class="section-form-item-text-indicator">Celular</p>
          <transition name="error">
            <p class="section-form-item-text-error" v-if="errorPhone">
              {{ errorPhone }}
            </p>
          </transition>
        </div>

        <input
          id="phone"
          type="tel"
          class="section-form-item-input"
          :class="{ error: errorPhone }"
          placeholder="Ex: +55 11 9 4219-8575"
          maxlength="18"
          v-model="phone"
          @input="applyMaskPhone"
          @focusout="checkPhone()"
        />
      </label>
    </form>
  </section>
</template>

<script>
export default {
  name: "personalInfo",
  data() {
    return {
      name: "",
      errorName: false,

      email: "",
      errorEmail: false,

      phone: "",
      errorPhone: false,
    };
  },
  watch: {
    name() {
      this.name = this.name.replace(/[^a-z\s]/gi, "");
      this.errorName = false;
    },
    email() {
      this.errorEmail = false;
    },
    phone() {
      this.errorPhone = false;
    },
  },
  methods: {
    checkName() {
      if (this.name.length === 0) {
        this.errorName = "Esse campo é obrigatório";
      } else if (!(this.name.length > 2)) {
        this.errorName = "Digite um nome verdadeiro";
      } else if (!/\s\w{3}/i.test(this.name)) {
        this.errorName = "Digite seu nome e sobrenome";
      } else {
        this.errorName = false;
        this.$store.commit("SET_NAME", this.name);
      }
    },
    checkEmail() {
      const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

      if (this.email.length === 0) {
        this.errorEmail = "Esse campo é obrigatório";
      } else if (!regexEmail.test(this.email)) {
        this.errorEmail = "Digite um e-mail válido";
      } else {
        this.errorEmail = false;
        this.$store.commit("SET_EMAIL", this.email);
      }
    },
    checkPhone() {
      if (this.phone.length === 0) {
        this.errorPhone = "Esse campo é obrigatório";
      } else if (this.phone.length < 18) {
        this.errorPhone = "Digite um telefone válido";
      } else if (this.phone.length === 18) {
        /* eslint-disable prettier/prettier */
        const phoneNoPlusSign = this.phone.slice(1, this.phone.length);
        const phoneNoHyphen = `${phoneNoPlusSign.slice(0, 12)}${phoneNoPlusSign.slice(13)}`;
        const phoneTrimmed = phoneNoHyphen.replaceAll(" ", "");

        if (/[^0-9]/g.test(phoneTrimmed)) {
          this.errorPhone = "Digite apenas números";
        } else {
          this.errorPhone = false;
          this.$store.commit("SET_PHONE", this.phone);
        }
      }
    },
    applyMaskPhone(event) {
      if (this.phone === "+") {
        this.phone = "";
      } else if (event.inputType !== "deleteContentBackward") {
        const n = this.phone;
        switch (this.phone.length) {
          case 2:
            this.phone = `+${n[0]}${n[1]}`;
            break;
          case 4:
            this.phone = `+${n[1]}${n[2]} ${n[3]}`;
            break;
          case 7:
            this.phone = `+${n[1]}${n[2]} ${n[4]}${n[5]} ${n[6]}`;
            break;
          case 9:
            this.phone = `+${n[1]}${n[2]} ${n[4]}${n[5]} ${n[7]} ${n[8]}`;
            break;
          case 14:
            this.phone = `+${n[1]}${n[2]} ${n[4]}${n[5]} ${n[7]} ${n[9]}${n[10]}${n[11]}${n[12]}-${n[13]}`;
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
/* FORMS */
.section-form {
  margin-top: 24px;
}
.section-form-item {
  display: block;
}
.section-form-item + .section-form-item {
  margin-top: 16px;
}
@media(min-width: 768px) {
  .section-form {
    margin-top: 40px;
  }
  .section-form-item + .section-form-item {
    margin-top: 24px;
  }
}

/* FORMS: INDICATOR AND ERROR TEXTS */
.section-form-item-text {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
}
.section-form-item-text-indicator {
  font-size: 12px;
  line-height: 14px;
  color: var(--c10);
}
.section-form-item-text-error {
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  color: var(--e1);
  text-align: right;
}
@media(min-width: 768px) {
  .section-form-item-text-indicator {
    font-size: 14px;
    line-height: 16px;
  }
  .section-form-item-text-error {
    font-size: 14px;
    line-height: 16px;
  }
}

/* FORMS: INPUT */
.section-form-item-input {
  margin-top: 3px;
  padding: 10px 15px;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: var(--c11);
  border: 1px solid var(--c3);
  border-radius: 4px;
  outline: none;
  transition: 0.2s;
}
.section-form-item-input.error {
  border-color: var(--e1);
}
.section-form-item-input:not(.error):focus {
  border-color: var(--p1);
}
.section-form-item-input::placeholder {
  color: var(--c3);
}
@media(min-width: 768px) {
  .section-form-item-input {
    margin-top: 8px;
    padding: 14px 15px;
    font-size: 16px;
    line-height: 18px;
    border-radius: 8px;
  }
}
</style>
