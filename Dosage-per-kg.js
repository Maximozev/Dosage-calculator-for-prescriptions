function calculateDosage(weight) {
  const dosagePerKg = 0.2; //based on the medicine you're prescribing
  const dosage = (weight * dosagePerKg).toFixed(2);
  return dosage;
}

const patientWeight = 40; // in kg
const dosage = calculateDosage(patientWeight);
console.log(`The patient should receive ${dosage} mg of medication.`);
