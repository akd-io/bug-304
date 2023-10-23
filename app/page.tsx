export const revalidate = 10;

export default async function LandingPage() {
  const number = Math.random();

  console.log("number", number);

  return <p>{number}</p>;
}
