export default {
  install(Vue) {
    Vue.prototype.$setErrorsFromLaravel = function (errorResponse, scope = null) {
      // Only allow this function to be run if the validator exists
      if (!('$validator' in this)) {
        return;
      }

      // Clear errors
      this.$validator.errors.clear();

      // Check if errors exist
      if (!('errors' in errorResponse)) {
        return;
      }

      // Insert Laravel errors
      Object.keys(errorResponse.errors).forEach((field) => {
        errorResponse.errors[field].forEach((msg) => {
          this.$validator.errors.add({ field, msg, scope });
        });
      });
    };
  },
};
