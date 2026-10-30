class animal {
  voice() {
    console.log("animal speaks");
  }
}

class dog extends animal {
  voice() {
    console.log("dogs barks");
  }
}

const ani = new animal();
ani.voice();
const dogy = new dog();
dogy.voice();
