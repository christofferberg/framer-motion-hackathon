import { FunctionComponent } from 'react'

interface Props {}

const HackathonBrief: FunctionComponent<Props> = () => {
  return (
    <>
      <span className="block mb-6 text-purple dark:text-purple-300 text-sm font-semibold">
        Jeff Kristiansen, Christoffer Berg, Martin Mostrøm, Casper Engelmann
      </span>

      <div className="prose">
        <h2>Framer Motion Hackathon - Februar 2021</h2>

        <h3>What will you be researching?</h3>
        <p>
          Vi vil gerne undersøge hvordan vi kan optimere salg, udvikling og
          implementering af animationer på web løsninger via{' '}
          <strong>Framer</strong> og <strong>Framer Motion</strong>.
        </p>

        <p>
          Animationer er ofte én af de nemmeste ting at skære af et projekt, da
          det ofte er dyrt at udvikle og implementere, samt svært for kunden,
          såvel som projektteamet at visualisere, og forstå vigtigheden af.
        </p>

        <p>
          Vi har en antagelse om at en klar prototype, samt kode-snippets til
          implementering af animationen, vil gøre det muligt at sælge og
          implementere animationer i et meget større omfang end hidtil set.
        </p>

        <p>
          Vi vil opnå dette ved at finde værktøjer, der vil gøre det nemmere for
          designere og udviklere i Adapt, at prototype animationer og dermed
          gøre det til en del af dialogen omkring designet af løsningen, samt at
          dele dem med kunden og projektteamet.
        </p>

        <p>
          Samtidig vil vi undersøge om design kan tage mere ejerskab på
          bevægelsesprincipper, og om dette kan blive en del af “leverancen” fra
          koncept til udvikling.
        </p>

        <h3>What is the success criteria?</h3>
        <ul>
          <li>
            Designere får adgang til et værktøj, der tilbyder en hurtig og
            intuitiv måde at prototype animationer på.
          </li>

          <li>
            Disse prototyper skal være af meget høj kvalitet og være meget tæt
            på det endelige resultat ved implementering.
          </li>

          <li>
            Prototyperne skal kunne deles på en nem måde, så kunder og
            projektteam kan se og teste animationen.
          </li>

          <li>
            Animationen skal kunne implementeres nemt i en moderne React
            frontend, og udvikleren skal ikke bruge budget på at opfinde
            animationen og dens timings m.m.
          </li>

          <li>Konkrete code snippets til implementering.</li>
        </ul>
      </div>
    </>
  )
}

export default HackathonBrief
