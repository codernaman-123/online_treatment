<template>
    <div>
          <div class="language-container">
              <div class="language-txt">Speaking Language</div>
              <div class="spoken-language" v-for="(item, index) in lang" :key="index">
                  <div><input type="checkbox" :name="index" :value="item" @change="filteredDoctorsByLang($event)"></div>
                  <div>{{ item }}</div>
              </div>
              <!-- <div class="spoken-language">
                  <div><input type="checkbox" name="Arabic"></div>
                  <div>Arabic</div>
              </div> -->
          </div>
    </div>
</template>

<script>
export default {
    name:"Language",
    props:['lang'],
    methods:{
        filteredDoctorsByLang(e){
            const selectedLang = e.target.value;
            this.$emit('getDataByLang', selectedLang);
        }
    }
}
</script>

<style>
.language-txt{
    font-weight: 700;
    color: #003084;
    font-size:16px;
}
.spoken-language{
    display:flex;
}
.language-container{
  width: 90%;
  background-color: #f4f9ff;
  height: 45%;
  margin-top: 100px;
  padding: 20px;
}   
.language-container .spoken-language{
    margin-top:20px;
}
</style>