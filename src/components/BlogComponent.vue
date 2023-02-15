<template>
  <div>
    <h1>Blog</h1>
    <div>
      <h2>Index</h2>
      <table>
        <tr v-for="(subject, index) in subjects" :key="index">
          <td @click="showSubject(index)">{{ subject.title }}</td>
        </tr>
      </table>
    </div>
    <div>
      <h2>Subjects</h2>
      <component :is="currentSubject"></component>
    </div>
  </div>
</template>

<script>
import RegressionAnalysis from './RegressionAnalysis.vue'



export default {

  
  data() {
    return {
      subjects: [
        { title: 'Regression Analysis', component: RegressionAnalysis },
        
      ],
      name: "BlogComponent",
      currentSubject: RegressionAnalysis
    }
  },
  methods: {
    showSubject(index) {
      this.currentSubject = this.subjects[index].component
    }
  }
}
</script>