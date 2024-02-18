<template>
  <v-app class="bg-indigo-lighten-5">
    <v-main>
      <v-app-bar color="primary">
        <v-app-bar-title>
          <span class="title-span">
            memeg
          </span>
        </v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer class="bg-indigo-lighten-4" permanent>

      </v-navigation-drawer>
      <div class="d-flex align-center flex-column">
        <v-card class="bg-lime-lighten-4 mx-10 my-8">
          <p class="text-center top-blob my-3 mx-10">
            This site enables you to create memes based on your images! Simply upload the image, set the top and bottom
            text and download the created file...
          </p>
        </v-card>
        <v-card variant="outlined" width="400" height="400" class="my-10 bg-lime-lighten-5">

        </v-card>
        <v-sheet width="450" class="mx-auto bg-indigo-lighten-5">
          <v-text-field v-model="topText" label="Top text"></v-text-field>
          <v-text-field v-model="bottomText" label="Bottom text"></v-text-field>
        </v-sheet>
        <v-btn color="secondary" class="mt-5">Download</v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>

<style>
.title-span {
  font-family: "Protest Riot", sans-serif;
  font-weight: 400;
  font-size: larger;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-blob {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
