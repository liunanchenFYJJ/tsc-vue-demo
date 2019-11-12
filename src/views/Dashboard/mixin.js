export default {
  data() {
    return {
      msg: '-mixin-',
    };
  },
  beforeCreate() {
    console.log('mixin beforeCreate');
    console.log(this);
  },
  created() {
    console.log(this.msg);
    this.sayMixin();
    console.log('mixin created');
  },
  methods: {
    sayMixin() {
      console.log(this.msg);
    },
  },
};
