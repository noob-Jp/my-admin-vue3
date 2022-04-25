
<template>
    <div class="quick-nav">
            <a 
            :href="item.link"
            target="_blank"
            v-for="item in navList"
            >
                <img :src="item.img" />
                <div style="font-size: 12px; color: #337AB7; font-weight: 700;">{{ item.title }}</div>
                <div style="font-size: 10px;">{{ item.desc }}</div>
            </a>
    </div>
</template>
    
<script setup>
defineProps({
    navList: {
        type: Array,
    },

})
</script>
    
<style lang="scss" scoped>
.quick-nav {
    width: 360px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    a{
        width: 31%;
        margin: 2px;;
        background-color: #fff;
        border-radius: 10px;
        text-align: center;
    }
    a:hover{
        box-shadow:5px 5px 3px #b4b2b2;
        transition: all 0.3s;
    }
    img{
        width: 60px;
    }
}
</style>