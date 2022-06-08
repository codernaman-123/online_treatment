<template>
    <div>
        <div class="department-block">
            <h5 class="txt-department">Department</h5>
            <div v-for="(item, index) in doctorsData" :key="index" :value="item.dept_id">
                <div class="department-categoary">
                    <div>
                       <input type="radio" name="deparment-type" :value="item.dept_id" v-model="selectedDeptValue" @change="selectDepartment">
                    </div>
                    <div>
                         {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Department",
    data(){
        return{
            selectedDeptValue:"",
        }
    },
    props:{
        doctorsData: Object,
    },
    methods:{
        selectDepartment(){
            console.log('this.selectedDeptValue', this.selectedDeptValue)
            this.$emit('getDepartment', this.selectedDeptValue)
        }
    }
}
</script>

<style>
.txt-department{
    color:#003084;
    font-size:17px;
}
.department-categoary{
    display: flex;
    margin-top:20px;
}
</style>