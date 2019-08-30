export default {
  data() {
    return {};
  },
  methods: {
    resizeChart(myChat) {
      window.addEventListener("resize", function() {
        myChat.resize();
      });
    }
  }
};
