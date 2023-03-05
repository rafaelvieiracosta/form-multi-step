<template>
  <section id="personalInfo" class="section">
    <h1 class="section-title">Informação pessoal</h1>
    <p class="section-description" @click="teste = !teste">
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

      <label for="name" class="section-form-item">
        <div class="section-form-item-text">
          <p class="section-form-item-text-indicator">Email</p>
          <transition name="error">
            <p class="section-form-item-text-error" v-if="errorEmail">
              {{ errorEmail }}
            </p>
          </transition>
        </div>

        <input
          id="name"
          type="email"
          class="section-form-item-input"
          :class="{ error: errorEmail }"
          placeholder="Ex: gustavo.ohashi@outlook.com"
          v-model="email"
          @focusout="checkEmail()"
        />
      </label>

      <label for="name" class="section-form-item">
        <div class="section-form-item-text">
          <p class="section-form-item-text-indicator">Celular</p>
          <transition name="error">
            <p class="section-form-item-text-error" v-if="errorPhone">
              {{ errorPhone }}
            </p>
          </transition>
        </div>

        <input
          id="name"
          type="tel"
          class="section-form-item-input"
          :class="{ error: errorPhone }"
          placeholder="Ex: +55 11 94219-8575"
          v-model="phone"
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
      this.applyMaskPhone();
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
    applyMaskPhone() {
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
    },
  },
};
</script>

<style scoped>
/* FORMS */
.section-form {
  margin-top: 40px;
}
.section-form-item {
  display: block;
}
.section-form-item + .section-form-item {
  margin-top: 24px;
}

/* FORMS: INDICATOR AND ERROR TEXTS */
.section-form-item-text {
  display: flex;
  justify-content: space-between;
}
.section-form-item-text-indicator {
  font-size: 14px;
  line-height: 16px;
  color: var(--c10);
}
.section-form-item-text-error {
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: var(--e1);
}

/* FORMS: INPUT */
.section-form-item-input {
  margin-top: 8px;
  padding: 14px 15px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: var(--c11);
  border: 1px solid var(--c3);
  border-radius: 8px;
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
</style>
