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
            <router-link :to="{ name: 'profile' }" class="text-dark text-decoration-none"
              >PROFILE</router-link
            >
            <hr />
            <p class="fs-1">{{ user.name }}</p>
            <hr />
            <p class="text-muted mx-auto">{{ user.email }}</p>
            <p class="text-muted mx-auto">{{ user.phone }}</p>
            <ul class="list-group">
              <router-link
                :to="{ name: 'change-password' }"
                class="list-group-item text-dark text-decoration-none"
                >Change Password</router-link
              >
              <router-link
                :to="{ name: 'edit-profile' }"
                class="list-group-item text-dark text-decoration-none"
                >Edit Profile</router-link
              >
              <li
                @click.prevent="logout"
                class="list-group-item text-dark text-decoration-none"
                style="cursor: pointer"
              >
                Logout
              </li>
            </ul>
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
      mainProps: { blank: true, blankColor: "#777", width: 75, height: 75, class: "m1" },
    };
  },
};
</script>
