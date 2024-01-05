class UberCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute, surgeMultiplier) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier || 1;
    }
  
    calculatePrice(distance, duration) {
      const totalPrice = (
        this.baseFare +
        distance * this.costPerKilometer +
        duration * this.costPerMinute
      ) * this.surgeMultiplier;
  
      return totalPrice.toFixed(2);
    }
  }
  
  // Example usage:
  const uberCalculator = new UberCalculator(150, 4, 10, 2.5);
  
  const distance = 10;
  const duration = 15;
  
  const price = uberCalculator.calculatePrice(distance, duration);
  console.log(`Uber Price: $${price}`);
  
