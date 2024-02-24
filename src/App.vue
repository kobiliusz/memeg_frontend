<template>
  <v-app class="bg-indigo-lighten-5">
    <v-main>
      <v-app-bar color="primary">
        <v-app-bar-title>
          <span class="title-span">
            memeg.eu
          </span>
        </v-app-bar-title>
      </v-app-bar>
      <ErrorDialog ref="errord" />
      <div>
        <v-card class="bg-lime-lighten-4 mx-10 mb-8 mt-8">
          <p class="text-center dm-sans my-3 mx-10">
            {{ $t("message.instructions") }}
          </p>
        </v-card>
        <div class="d-flex flex-wrap justify-center">
          <v-sheet border="sm" width="400" height="400"
            class="mb-10 mt- bg-lime-lighten-5 d-flex align-center justify-center">
            <input type="file" ref="fileInput" @change="handleFiles" v-show="false" accept="image/*" />
            <div id="placeholder" class="d-flex flex-column align-center justify-center" v-if="!imagePresent"
              @dragover.prevent="highlight" @dragleave.prevent="unhighlight" @drop.prevent="handleDrop"
              @click="triggerFileDialog" transition="fade-transition">
              <v-icon icon="mdi-gesture-tap-button" size="x-large"></v-icon>
              <span class="dm-sans text-center">{{ $t("message.input") }}</span>
            </div>
            <img v-show="imagePresent && !loading" ref="image" id="image" transition="fade-transition" />
            <div class="d-flex align-center justify-center" v-if="loading">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </div>
          </v-sheet>
          <div class="d-flex flex-column mx-5">
            <v-sheet width="400" class="bg-indigo-lighten-5 dm-sans">
              <v-text-field v-model="topText" :label="$t('message.top')" @keyup="delayedFetch" :disabled="!imagePresent"></v-text-field>
              <v-text-field v-model="bottomText" :label="$t('message.bottom')" @keyup="delayedFetch" :disabled="!imagePresent"></v-text-field>
            </v-sheet>
            <div class="d-flex mt-5 justify-center" v-if="imagePresent">
              <v-btn color="secondary" class="mr-5" @click="downloadImage">{{ $t("message.download") }}</v-btn>
              <v-btn color="primary" @click="clear">{{ $t("message.clear") }}</v-btn>
            </div>
          </div>
        </div>
      </div>

    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      baseImage: "",
      imagePresent: false,
      topText: '',
      bottomText: '',
      timeoutId: null,
      loading: false
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
      if (!file) return;
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.baseImage = e.target.result;
          this.$refs.image.src = this.baseImage;
          this.imagePresent = true;
        };
        reader.readAsDataURL(file);
      } catch (error) {
        this.$refs.errord.activate();
      }
    },
    clear() {
      this.baseImage = "";
      this.$refs.image.src = "";
      this.imagePresent = false;
      this.loading = false;
      this.topText = '';
      this.bottomText = '';
    },
    downloadImage() {
      const linkSource = this.$refs.image.src;
      const downloadLink = document.createElement('a');
      downloadLink.href = linkSource;
      downloadLink.download = this.topText + '_' + this.bottomText + '_meme' + this.getImageExtension(linkSource);
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    },
    getImageExtension(base64String) {
      const match = base64String.match(/data:image\/([a-zA-Z]*);base64,/);

      if (match && match[1]) {
        const imageType = match[1];
        switch (imageType) {
          case 'jpeg':
          case 'jpg':
            return '.jpg';
          case 'png':
            return '.png';
          case 'gif':
            return '.gif';
          default:
            return '';
        }
      }
      return '';
    },
    stripBytes(b64) {
      return b64.split(',')[1];
    },
    packageBytes(b64) {
      return 'data:image/jpg;base64,' + b64;
    },
    delayedFetch() {
      if (!this.imagePresent) return;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {

        this.loading = true;
        var env = process.env.NODE_ENV || 'development';

        var url;

        if (env == 'development') {
          url = "http://127.0.0.1:8000/make_meme/"
        } else {
          url = "/make_meme/"
        }

        var req_data = {}
        req_data['image_b64'] = this.stripBytes(this.baseImage);
        req_data['top_text'] = this.topText;
        req_data['bottom_text'] = this.bottomText;

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req_data),
        })
          .then(response => {
            if (response.status == 406) {
              this.$refs.errord.activate();
              this.clear();
            } if (!response.ok) {
              // If the response is not 2xx, throw an error
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            if (data == null) {
              return;
            }
            this.$refs.image.src = this.packageBytes(data['image_b64']);
          })
          .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
          })
          .finally(a => {
            this.loading = false;
          });
      }, 1000);
    }
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

#image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
