function PetInfo({ animal, age, hasPet }) {
  return (
    <h1>
      {hasPet ? `My ${animal} is ${age} years old` : "I do not have a pet"}
    </h1>
  );
}

export default PetInfo;
