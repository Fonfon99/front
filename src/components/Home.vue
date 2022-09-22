<script>
import Navbar from './Navbar.vue';
import Card from './Card.vue';
export default {
    name: "Home",
    components: { Navbar, Card },
};
</script>
<template>
    <Navbar />
    <div class="wall d-block">
        <div class="container rounded border d-flex m bg-white">
            <div class="p-1">
                <div class="rounded-circle border me-2 d-flex justify-content-center align-items-center" style="width: 40px; height: 40px" alt="Avatar">
                    <font-awesome-icon icon="fa-solid fa-user"></font-awesome-icon>
                </div>
            </div>
            <input type="text" name="createPost" class="ps-3 my-1 flex-grow-1 me-4 w-auto rounded border border-1 bg-light"
                placeholder="Create Post" />
            <div class="icon align-self-center" style="width: 30px; height: 30px">
                <font-awesome-icon icon="fa-solid fa-image" />
            </div>
            <div class="icon align-self-center mx-2" style="width: 30px; height: 30px">
                <font-awesome-icon icon="fa-solid fa-link" />
            </div>
        </div>
        <hr class="dropdown-divider mt-4 mx-auto border w-75 justify-content-center"/>
        <Card/>
        <Card/>
        <Card/>
    </div>


</template>

<style scoped>
input {
    cursor: text;
}
</style>
