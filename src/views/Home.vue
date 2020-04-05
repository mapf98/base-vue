<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn class="ma-2" tile outlined color="success" x-large>
          GET Banks
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-wrap justify-center">
        <v-card color="#385F73" dark min-width="500" class="ma-5">
          <v-card-title class="headline text-center">Bank name</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
