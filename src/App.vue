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
          <p class="text-center dm-sans my-3 mx-10">
            This site enables you to create memes based on your images! Simply upload the image, set the top and bottom
            text and download the created file...
          </p>
        </v-card>
        <v-sheet border="sm" width="400" height="400" 
          class="my-10 bg-lime-lighten-5 d-flex align-center justify-center">
          <div id="placeholder" class="d-flex flex-column align-center justify-center" v-if="!imagePresent" 
          @dragover.prevent="highlight" @dragleave.prevent="unhighlight" @drop.prevent="handleDrop">
            <v-icon icon="mdi-gesture-tap-button" size="x-large"></v-icon>
            <span class="dm-sans">Drop file or click to upload!</span>
          </div>
        </v-sheet>
        <v-sheet width="450" class="mx-auto bg-indigo-lighten-5 dm-sans">
          <v-text-field v-model="topText" label="Top text"></v-text-field>
          <v-text-field v-model="bottomText" label="Bottom text"></v-text-field>
        </v-sheet>
        <v-btn color="secondary" class="mt-5" v-if="imagePresent">Download</v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      imagePresent: false,
      topText: '',
      bottomText: ''
    };
  },
  methods: {
    triggerFileDialog() {
      this.$refs.fileInput.click();
    },
    handleFiles(event) {
      const files = event.target.files || event.dataTransfer.files;
      this.readFile(files[0]);
    },
    handleDrop(event) {
      this.handleFiles(event);
      this.unhighlight(event);
    },
    highlight(event) {
      event.target.style.backgroundColor = '#F4FF81';
    },
    unhighlight(event) {
      event.target.style.backgroundColor = '#F9FBE7';
    },
    readFile(file) {
      console.log(file); 
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result); 
      };
      reader.readAsDataURL(file);
    },
  },
}
</script>

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

.dm-sans {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

#placeholder {
  width: 100%;
  height: 100%;
}

</style>
