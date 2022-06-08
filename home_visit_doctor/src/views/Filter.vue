<template lang="languages">
<div class="container">
    <div class="parentDiv">
        <div class="child1">
            <div class="filter-block">
                <div class="txt-filter">Filters</div>
                <div class="txt-price">Price</div>
                <br><br>
                <div class="radio-btn-block1">
                    <span><input type="radio" name="filterbtn" value="0" v-model="price" @change="filteredResult()" /></span>
                    <span>Low to high</span>
                </div>
                <div class="radio-btn-block2">
                    <span><input type="radio" name="filterbtn" value="1" v-model="price" @change="filteredResult()" /></span>
                    <span>High to low</span>
                </div>
            </div>
            <div v-if="departments && departments.length" class="department">
                <Department :doctorsData="departments" @getDepartment="filteredDoctorsListByDept" />
            </div>
            <div>
                <Language :lang="languages" @getDataByLang="filteredResultByLang" />
            </div>
            <div class="classification-block">
                <Classification :classificationData="classification" @getDataByClassification="filteredDoctorsList" />
            </div>
        </div>
        <div class="child2">
            <DoctorsList :doctData="doctorsInfo" class="doct-component" />
        </div>
        <div v-if="loading" class="sa-loader"></div>
        <!-- <div>
            <el-checkbox v-model="checked">Option</el-checkbox>
        </div> -->
    </div>
    <div>
        <el-button type="text">Text Button naman</el-button>
    </div>
</div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import DoctorsList from "./DoctorsList.vue";
import Department from "./Department.vue";
import Language from "./Language.vue"
import Classification from "./Classification.vue"


export default {
    name: "Filter",
    components: {
        DoctorsList,
        Department,
        Language,
        Classification,
    },
    created() {
        this.loading = true;
        this.getDataOfDoctors();
    },
    data() {
        return {
            doctorsInfo: [],
            price: "",
            dept_id: null,
            classification: {},
            res: {},
            departments: [],
            languages: [],
            langName: null,
            loading: false,
            checked: true,
        }
    },
    methods: {
        getDataOfDoctors() {
            let todayDate = moment();
            console.log("value :", todayDate);
            todayDate = todayDate.format('YYYY-MM-DD');
            console.log("todays date: ", todayDate);
            console.log("value of price :", this.price, " and its type is:", typeof this.price);
            let req = {
                date: todayDate,
                emp_type_id: "1",
                filter: {
                    classification: [],
                    lang: [],
                    price: this.price
                },
                lat: "24.7135517",
                lng: "46.6752957",
                service_type_id: "ST0",
            }
            if (this.dept_id) {
                req.dept_id = this.dept_id
            }
            if (this.langName) {
                req.filter.lang.push(this.langName);
            }
            axios
                .post("https://phub.litedev.com/v5/doctor/browseWeb", req)
                .then((response) => {
                    console.log("value of response: ", response);
                    this.res = response;
                    this.loading = false;
                    this.doctorsInfo = response.data.data.slotsArr;
                    this.departments = response.data.data.depts
                    console.log("doctorsInfo pageLoad: ", this.doctorsInfo);
                    this.classification = response.data.data.classifications;
                    this.languages = response.data.data.languages;
                })
                .catch((error) => {
                    console.log("error :", error);
                });
        },
        filteredResult() {
            this.loading = true;
            this.getDataOfDoctors();
        },
        filteredDoctorsListByDept(deptId) {
            console.log("value of dept id: ", deptId);
            this.dept_id = deptId;
            this.loading = true;
            this.getDataOfDoctors()
            console.log("this.doctorsInfo: ", this.doctorsInfo);
        },
        filteredResultByLang(language) {
            this.langName = language;
            this.loading = true;
            this.getDataOfDoctors();
        },
        filteredDoctorsList(classificationId) {
            this.loading = true;
            let todayDate = moment();
            console.log("value :", todayDate);
            todayDate = todayDate.format('YYYY-MM-DD');
            console.log("todays date: ", todayDate);
            let req = {
                date: todayDate,
                emp_type_id: "1",
                filter: {
                    classification: [],
                    lang: [],
                    price: this.price
                },
                lat: "24.7135517",
                lng: "46.6752957",
                service_type_id: "ST0",
            }
            req.filter.classification.push(classificationId);
            axios
                .post("https://phub.litedev.com/v5/doctor/browseWeb", req)
                .then((response) => {
                    console.log("value of response: ", response);
                    this.res = response;
                    this.loading = false;
                    this.doctorsInfo = response.data.data.slotsArr;
                    console.log("doctorsInfo pageLoad: ", this.doctorsInfo);
                    this.classification = response.data.data.classifications;
                })
                .catch((error) => {
                    console.log("error :", error);
                });
        }
    }
};
</script>

<style>
.sa-loader {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.8;
    right: 0;
    bottom: 0;
    z-index: 9;
    background: url(https://img.litedev.com/ams-icons-images/images/loader.svg) no-repeat center center #FFF;
}

.container {
    margin: 100px;
    height: 100vh;
}

.parentDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.child1 {
    width: 25%;
    height: 100%;
}

.parentDiv .child1 .filter-block {
    width: 90%;
    background-color: #f4f9ff;
    height: 45%;
    padding: 20px;
}

.filter-block .txt-filter {
    font-weight: 700;
    padding-left: 10px;
    font-size: 19px;
    font-style: "Poppins, sans-serif";
}

.filter-block .txt-price {
    font-weight: 700;
    padding-left: 10px;
    color: #003084;
    margin-top: 20px;
    font-size: 17px;
    font-style: "Poppins, sans-serif";
}

.radio-btn-block2 {
    margin-top: 20px;
}

.child2 {
    width: 70%;
}

.parentDiv .child1 .classification-block {
    background-color: #f4f9ff;
    margin-top: 50px;
}

.department {
    background-color: #f4f9ff;
    margin-top: 50px;
    padding: 20px;
}

@media only screen and (max-width: 768px),
only screen and (max-device-width: 768px) {
    .container {
        margin: 50px;
    }

    .parentdiv {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .parentDiv .child1 {
        width: 100%;
    }

    .parentDiv .child1 .classification-block {
        background-color: #f4f9ff;
        margin-top: 50px;
    }

    .parentDiv .child2 {
        width: 100%;
    }
}
</style>
