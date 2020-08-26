<template>
  <div id="add-skills">
    <div class="container">
      <form @submit.prevent="AddSkills">
        <ul class="list-skills">
          <li>
            <div class="field title">
              <label for="title">Skill Title:</label>
              <input
                type="text"
                autocomplete="off"
                name="title"
                v-model="title"
              />
              <p v-if="feedback" class="red-text">{{ feedback }}</p>
            </div>
          </li>
          <li
            class="list-skills-list"
            v-for="(skill, index) in skills"
            :key="index"
          >
            <!-- <label for="skill">Add Skills</label>
            <input type="text" name="skill" v-model="skills[index]" />-->
            <span class="chip">
              <span class="skill-span">{{ skills[index] }}</span>
              <i class="material-icons remove" @click="deleteSkillsList(skill)"
                >clear</i
              >
            </span>
          </li>
          <li>
            <div class="field add-skills">
              <label for="add-skills">Add Skills:</label>
              <input
                type="text"
                autocomplete="off"
                name="add-skills"
                @keydown.tab.prevent="addIn"
                v-model="another"
              />
            </div>
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
          </li>
          <li>
            <div class="field center">
              <button class="btn btn-primary">Add Skills</button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "AddSkills",
  data() {
    return {
      title: null,
      another: null,
      skills: [],
      feedback: "",
      slug: null,
    };
  },
  methods: {
    AddSkills() {
      console.log(this.title, this.skills);
      if (this.title) {
        this.feedback = null;
        //create slugify
        this.slug = slugify(this.title, {
          replacement: "-",
          remove: /[*+~.()'"!:@]/g,
          lower: true,
        });
        db.collection("knacks")
          .add({
            title: this.title,
            skills: this.skills,
            slug: this.slug,
          })
          .then(() => {
            this.$router.push({ name: "Home" });
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(this.slug);
      } else {
        this.feedback = "Enter valid skills title";
      }
    },
    addIn() {
      if (this.another) {
        this.skills.push(this.another);
        console.log(this.skills);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "Please enter valid value";
      }
    },
    deleteSkillsList(skill) {
      this.skills = this.skills.filter((skill) => {
        return skill != skill;
      });
    },
  },
};
</script>
<style>
#add-skills {
  max-width: 500px;
  margin: 40px auto;
}
#add-skills .chip {
  position: relative;
  margin-top: 10px;
}
#add-skills .skill-span {
  font-size: medium;
}
#add-skills .remove {
  font-size: 20px;
  position: absolute;
  top: -10px;
  background-color: brown;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}
#add-skills .list-skills .list-skills-list {
  display: inline-block;
  margin-right: 10px;
}
</style>
