<template>
   <div class="classification-container">
      <div>
          <h5>Classification</h5>
          <div>
              <div v-for="(item,index) in Object.values(classificationData)" :key="index" class="classification-element">
                  <div>
                        <input type="checkbox" :value="Object.keys(classificationData)[index]"
                         @change="filteredListByClassification($event)" :name="index">
                  </div>
                  <div class="classification-item">{{item}}</div>
              </div>
          </div>
      </div>
   </div>
</template>

<script>
export default {
      name:"Classification",
      props:{
          classificationData: Object
      },
      data(){
          return{
          }
      },
      methods:{
          filteredListByClassification(e){
              const classificationId = e.target.value;
              console.log("this.classificationItem", classificationId);
              this.$emit('getDataByClassification', classificationId);
          }
      }
}
</script>

<style>
.classification-container div h5{
    color: #003084;
    font-family:sans-serif;
    padding-top: 40px;
    padding-left:20px;
    font-size: 20px;
}
.classification-container div{
    background-color:#f4f9ff;
}
.classification-element{
    display:flex;
    padding:10px;
}
.classification-item{
    padding-left:20px;
}
.classification-element div input{
    border-radius:5px;
}
</style>