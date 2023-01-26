import { CoffeCardContainer, Tags, Name, Description } from './styles'

export function CoffeCard() {
  return (
    <CoffeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1675641600&Signature=hrwGVzr5Er7dvWPuMD5ZeMDhyIxI~eENI~7btqC7FEv-h3Z23PbYBtbVbPRI3HYKNJcwjsl6HrDZL6krgizagxyyl12KGoILZRGjtQYBShF74KNo9ruwhzY-4AxREEbRGQW5rXtUj0DSpIkPpFa0Uur4GAFZ~lQBw9s3duy8oeFIBUWCWcPvd7kcWeLNH1H0Pr3skR0jryDNQWQdcQJJ1hW4jgXBVsl8m~nbePlyeZ-8GE5p9E4Bm3xhMBBlDIXjEcqSme0rM3LWaxdyKaJUWx9Qa3aQpcJN1dwQMzYdGFoR4mWU355k7GZFlBIXPY40PS-gp06HOco7vdwYDd0CnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <Tags>
        <span>tradi</span>
        <span>trad2323i</span>
      </Tags>
      <Name>Expresso tradi</Name>
      <Description>O Café feito com água quente e grãos moídos</Description>
    </CoffeCardContainer>
  )
}
