<template>
  <div id="add-skills">
    <div class="container">
      <form @submit.prevent="AddSkills">
        <div class="field title">
          <label for="title">Skill Title:</label>
          <input type="text" autocomplete="off" name="title" v-model="title" />
        </div>
        <div v-for="(skill, index) in skills" :key="index">
          <label for="skill">Add Skills</label>
          <input type="text" name="skill" v-model="skills[index]" />
          <span class="chip">
            {{skills[index]}}
            <i class="material-icons">clear</i>
          </span>
        </div>
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
        <div class="field center">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn btn-primary">Add Skills</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddSkills",
  data() {
    return {
      title: null,
      another: null,
      skills: [],
      feedback: "",
    };
  },
  methods: {
    AddSkills() {
      console.log(this.title, this.skills);
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
  },
};
</script>
<style>
#add-skills {
  max-width: 500px;
  margin: 40px auto;
}
</style>