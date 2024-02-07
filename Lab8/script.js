class HumanClass {
    constructor(name, surname, age, gender) {
        this.name = name
        this.surname = surname
        this.age = age
        this.gender = gender
    }

    info() {
        console.log(this.name, this.surname, this.age, this.gender)
    }
}

let human1 = new HumanClass("Michael", "Bobbins", 23, "Male")
human1.info()
let human2 = new HumanClass("Taylor", "Swift", 78, "Female")
human2.info()
let human3 = new HumanClass("Gordon", "Ramsay", 56, "Male")
human3.info()

class Component {
    constructor(selector) {
      this.$el = document.querySelector(selector);
    }
    
    blockHide() {
      this.$el.style.display = 'none';
    }
    
    editColor(color) {
      this.$el.style.background = color;
    }
  }  

class Box extends Component {
    constructor(options) {
      super(options.selector);
      this.$el.style.width = options.width + 'px';
      this.$el.style.height = options.height + 'px';
      this.$el.style.background = options.color;
    }
  }
  
  const box1 = new Box({
    selector: '#box1',
    width: 1000,
    height: 50,
    color: 'blue'
  });

  document.getElementById('changeColorBtn').addEventListener('click', function() {
    box1.editColor('red');
  });
  
  document.getElementById('hideBtn').addEventListener('click', function() {
    box1.blockHide();
  });
  