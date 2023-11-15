<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body bg-dark">
            <img
              src="https://picsum.photos/250/250/?image=54"
              class="rounded-circle img-thumbnail mx-auto d-block"
              alt="user-avatar"
            />
            <form method="post" enctype=multipart/form-data>
            <div class="input-group mt-3">
            <span class="input-group-text">Change Picture</span>
            <label tabindex="0" class="form-control">
                Choose Picture
                <input type="file" class="invisible">
            </label>
            </div>
        </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
          <router-link
              :to="{ name: 'dashboard' }"
              class="text-dark text-decoration-none"
              >DASHBOARD /
            </router-link>
            <router-link :to="{ name: 'edit-profile' }" class="text-dark text-decoration-none"
              >EDIT PROFILE</router-link
            >
            <hr />
            <form>
              <div class="form-group">
                <input type="email" class="form-control" v-model="user.name" />
              </div>
              <br />
              <div class="form-group">
                <input type="email" class="form-control" v-model="user.email" />
              </div>
              <br />
              <div class="form-group">
                <input type="email" class="form-control" v-model="user.phone" />
              </div>
              <br />
              <div class="d-grid gap-2">
                <button class="btn btn-dark" type="submit">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    //state token
    const token = localStorage.getItem("token");

    //inisialisasi vue router on Composition API
    const router = useRouter();

    //state user
    const user = ref("");

    //mounted properti
    onMounted(() => {
      //check Token exist
      if (!token) {
        return router.push({
          name: "login",
        });
      }

      //get data user
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .get("http://localhost:8000/api/user")
        .then((response) => {
          //console.log(response.data.name)
          user.value = response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    //method logout
    function logout() {
      //logout
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .post("http://localhost:8000/api/logout")
        .then((response) => {
          if (response.data.success) {
            //remove localStorage
            localStorage.removeItem("token");

            //redirect ke halaman login
            return router.push({
              name: "login",
            });
          }
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    return {
      token, // <-- state token
      user, // <-- state user
      logout, // <-- method logout
    };
  },
};
</script>
