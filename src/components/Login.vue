<template>
    <div class="container box bg_lightgray mb-3">
        <h1>Login vue component</h1>
        <h2>
            Bootstrap 적용, Custom CSS 적용
        </h2>
        <div class="row mb-3">
            <div class="col-6">
                <img alt="Vue logo" src="../assets/logo.png">
            </div>
            <div class="col-6">
                <h2>Login</h2>
                <div class="mb-3">
                    <input class="form-control" type="text" placeholder="Default input"
                        aria-label="default input example">
                    <input class="form-control" type="text" placeholder="Default input"
                        aria-label="default input example">
                    <button type="button" class="btn btn-primary">Login</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginVue',
}
</script>

<style lang="scss" scoped>
</style>