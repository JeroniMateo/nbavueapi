<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="container">
    <table class="table table-bordered border-primary">
  <thead>
    <th>Initials</th>
    <th>Name</th>
    <th>Team</th>
    <th>Conference</th>
    <th>City</th>
  </thead>
  <tbody id="nbaTeamsRows">
        
  </tbody>
</table>
  </div>
</template>

<script>
export default {
    //eslint-disable vue/multi-word-component-names 
    name:'Teams',
    beforeMount() {
        fetch('https://balldontlie.io/api/v1/teams')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    document.getElementById('nbaTeamsRows').innerHTML=`
                    <tr> 
                        <td>${this.data[i].abbreviation}</td>
                        <td>${this.data[i].name}</td>
                        <td>${this.data[i].full_name}</td>
                        <td>${this.data[i].conference}</td>
                        <td>${this.data[i].city}</td>
                    </tr>
                    `
                    
                }
            }
                
               
                
            )
    }

}
</script>

<style>

</style>