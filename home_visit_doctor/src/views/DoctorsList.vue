<template>
<div>
    <h2 class="txt-home-visit">Home visit Doctor</h2>
    <div v-if="doctData.length > 0">
        <div class="card-box" v-for="(item, index) in doctData" :key="index">
            <div class="doctors-info-block">
                <div class="image">
                    <img :src="(item.em.img === '') ? 'https://img.litedev.com/images/unknown-avtar.png' : item.em.img " alt="">
                </div>
                <div class="professional-info">
                    <div class="dr-name">{{ item.em.dr_name }}</div>
                    <div>{{ item.em.classification_dept }}</div>
                    <div>
                        <span><i class="icon-calendar-star"></i></span>
                        <span>Experience: {{ item.em.exp }}</span>
                    </div>
                    <div>
                        <span><i class="icon-doctor-bag2"></i></span>
                        <span>{{ item.hp.en_nm }} , {{item.hp.cty}}</span>
                    </div>
                    <div>
                        Home Visit
                    </div>
                </div>
                <div class="sa-doct-price">
                    <div>Price</div>
                    <div class="price-tag">SAR {{Number(item.em.fee)}}</div>
                </div>
            </div>
            <div class="card-box-footer">
                <vue-horizontal>
                   <div v-for="(dataItem, index) in item.slots" :key="index" class="time-block active">
                       {{getTime(dataItem.strt_tym)}}
                   </div>
                </vue-horizontal>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="Doctor-image-synmbol">
            <div>
               <div>
                  <img src="../assets/Doctor-image.png" alt="doctor image">
               </div>
               <h1>Doctor's not available for Today !</h1>
               <div class="btn-block">
                  <button>Check next availability</button>
               </div>
            </div>
        </div>
    </div> 
</div>
<!-- <div>
    <el-row>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-row>
</div> -->
</template>

<!--<script src="//unpkg.com/element-ui/lib/umd/locale/en.js"></script> -->
<script>
import moment from "moment";
import VueHorizontal from "vue-horizontal";

export default {
    name: "DoctorsList",
    props: {
        doctData: Array
    },
    components:{
        VueHorizontal,
    },
    data() {
        return {
            imageUrl: "",
        }
    },
    methods: {
        getTime(val) {
            return moment(val, 'HH:mm').format("hh:mm a")
        }
    }
}
</script>

<style>
.doctors-info-block {
    width: 100%;
    height: 200px;
}

.doctors-info-block .image img {
    height: 100%;
    width: 100%;
}

.card-box {
    border: 1px skyblue solid;
    border-radius: 10px;
    margin-bottom: 20px;
}

.icon-calendar-star {
    content: "\ea6d";
}

.card-box .doctors-info-block {
    display: flex;
}

.doctors-info-block .image {
    width: 15%;
    height: 100%;
}

.professional-info {
    padding-left: 10px;
    width: 60%;
}

.price-tag {
    color: #2552f2;
    font-size: 15px;
    font-weight: 700;
}

.sa-doct-price {
    padding: 50px;
}

.dr-name {
    font-size: 20px;
    font-weight: 700;
}

.Doctor-image-synmbol div .btn-block button {
    padding: 20px;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    border: none;
}

.Doctor-image-synmbol div .btn-block button:hover {
    cursor: pointer;
}

.Doctor-image-synmbol div .btn-block {
    display: flex;
    justify-content: center;
}

.time-block {
    border: 1px solid skyblue;
    border-radius: 5px;
    padding: 5px 20px;
    margin-right: 30px;
}

.card-box-footer .active:hover {
    background-color: #2552f2;
    color: white;
    cursor: pointer;
}

.card-box-footer {
    /* display: flex;
    justify-content: space-between; */
    margin-right: 24px;
    margin-top: 10px;
    /* overflow-x: scroll; */
}

.Doctor-image-synmbol {
    display: flex;
    justify-content: center;
}

@media only screen and (max-width: 768px),
only screen and (max-device-width: 768px) {
    .parentDiv {
        flex-wrap: wrap;
    }

    .child1 {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }

    .doctors-info-block .image {
        width: 40%;
        margin-right: 20px;
    }

    .txt-home-visit {
        font-size: 24px;
        font-weight: 800;
        font-family: sans-serif;
    }
}
</style>
