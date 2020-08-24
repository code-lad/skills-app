<template>
  <div id="skills">
    <div class="card" v-for="skill in skills" :key="skill.id">
      <div class="card-content">
        <i class="material-icons delete" @click="skillsetDelete(skill.id)"
          >delete</i
        >
        <span class="card-title">{{ skill.title }}</span>
        <ul class="skillsets">
          <li v-for="(skillset, index) in skill.skills" :key="index">
            <span class="chip">{{ skillset }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <a href="#">Edit</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Skills",
  data() {
    return {
      title: "Skills In",
      skills: [
        {
          title: "Web Development",
          link: "web-development",
          skills: ["HTML5", "CSS#", "JavaScript", "PHP", "Vue", "React"],
          id: 1,
        },
        {
          title: "Programing",
          link: "programming",
          skills: ["Java", "C++", "Kotlin", "C#", "Python"],
          id: 2,
        },
        {
          title: "Web Design",
          link: "web-design",
          skills: ["Photoshop", "Adope XD", "Bootstrap", "Materializecss"],
          id: 3,
        },
      ],
    };
  },
  methods: {
    skillsetDelete(id) {
      this.skills = this.skills.filter((skills) => {
        return skills.id != id;
      });
    },
  },
};
</script>
<style>
#skills {
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;
}
#skills .card li {
  display: inline-block;
}
#skills .delete {
  position: absolute;
  right: 10px;
  top: 30px;
  color: brown;
  cursor: pointer;
}
</style>
