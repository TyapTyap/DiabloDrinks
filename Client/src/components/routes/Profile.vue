<template>
  <div class="my-border">
		<h1>Profile</h1>
    <p>Keresztnév: {{$root.$data.user.firstName}}</p>
        <p>Vezetéknév: {{$root.$data.user.lastName}}</p>
        <p>E-mail: {{$root.$data.user.email}}</p>
        <p>Telefonszám: {{$root.$data.user.phoneNumber}}</p>
        <p>Jogosultság: {{$root.$data.user.permission}}</p>
  </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style>

</style>