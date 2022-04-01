const log = {
    data() {
        return {
          name: undefined,
          time: undefined,
        };
      },
      created() {
          if(!this.name){
              throw new Error('need name')
          }
        this.time = new Date();
        console.log(this.time);
        console.log(`${this.name}出生了`);
      },
      beforeDestroy() {
        const newTime = new Date();
        console.log(newTime);
        console.log(`${this.name}死亡了 存活了${newTime -this.time}ms`);
      },
}

export default log