<template>
  <div class="container-fluid mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
           <router-link
              :to="{ name: 'dashboard' }"
              class="text-dark text-decoration-none"
              >BACK TO DASHBOARD</router-link>
            <hr />
            <h4><center>Change Password</center></h4>
            <hr />
            <form>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email Address..." />
              </div>
              <br />
               <div class="form-group">
                <input type="password" class="form-control" placeholder="New Password..." />
              </div>
              <br />
               <div class="form-group">
                <input type="password" class="form-control" placeholder="New Password Confirmation..." />
              </div>
              <br />
              <div class="d-grid gap-2">
                <button class="btn btn-dark" type="submit">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
