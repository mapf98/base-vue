<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn
          class="ma-2"
          tile
          outlined
          color="success"
          x-large
          :loading="loading"
          @click="getBanks"
        >
          GET Banks
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-wrap justify-center">
        <v-card
          v-for="bank in banks"
          :key="bank.bank_id"
          color="#385F73"
          dark
          min-width="500"
          class="ma-5"
          transition="slide-y-transition"
        >
          <v-card-title class="headline text-center">{{
            bank.bank_name
          }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Home extends Vue {
  loading = false;

  getBanks() {
    this.loading = true;
    this.$store.dispatch("banks/read").then(() => {
      this.loading = false;
    });
  }

  get banks() {
    return this.$store.state.banks.banks;
  }
}
</script>

<style lang="scss"></style>
