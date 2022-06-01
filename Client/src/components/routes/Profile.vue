<template>
  <div class="my-border">
		<h1>Profile</h1>
    <p>Keresztnév: {{$root.$data.user.FirstName}}</p>
        <p>Vezetéknév: {{$root.$data.user.LastName}}</p>
        <p>E-mail: {{$root.$data.user.Email}}</p>
        <p>Telefonszám: {{$root.$data.user.PhoneNumber}}</p>
        <p>Jogosultság: {{$root.$data.user.Permission}}</p>
  </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style>

</style>