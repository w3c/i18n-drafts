# Address formats around the world

## Question

### How do address formats differ around the world, and what are the implications of those differences on the design of forms, databases, ontologies, etc. for the Web?

Address formats vary widely across the globe, with differences in structure, content, and the level of granularity. For authors and developers designing forms, databases, or systems that handle addresses, understanding these variations is crucial to avoid frustrating users from other countries. This article will introduce some of the key differences in address formats around the world and provide guidance on how to design systems that can handle them effectively.

This is not an exhaustive guide but aims to sensitize you to the complexities of international address formats and the challenges they pose for web design. As with [personal names](https://www.w3.org/International/questions/qa-personal-names.en.html), there is rarely a "perfect" solution, but awareness of these differences is the first step toward building more inclusive systems.

## Global variations in address formats

In most countries, an address consists of a combination of elements such as a street name, a house number, a postal code, and a locality name. However, the order, structure, and even the elements themselves can vary significantly between countries—and sometimes even within the same country. Below are some examples of how address formats differ around the world.

### Key differences in address formats

#### **Street numbers and house numbering**

In Colombia, instead of numbering houses sequentially along a street, addresses are based on the distance from the nearest intersecting street.

Kyoto uses a similar system based around street intersections, with cardinal directions indicating the location relative to the intersection.

Elsewhere in Japan, street names are often not used at all. Instead, buildings are referenced by block numbers, and their numbering may not follow geographic order (e.g., they can be the order in which buildings were constructed).

#### **Order of address components**

While most countries recommend that users format addresses in order from the most detailed part (such as street and house number) to the most general part (like city and province), there are some cases that slightly deviate from the general rule.

In Germany, if there are suburbs, their names should be placed above the street name and house number.

In China, addresses are written starting with the postal code, followed by the largest administrative area (e.g., province), and down to the smallest unit (e.g., room number). For example:

```
100083 北京市 海淀区 学院路 37号
```

(Postal code → City → District → Street → House number).

Russia often follow a "largest-to-smallest" order, starting with the country. For example:

```
Russia, Moscow, Tverskaya Street, 16
```

However, Russia also uses the "smallest-to-largest" order commonly seen internationally, so developers should account for both formats.

#### **Locality-specific elements**

For example, the UK includes elements like "dependent locality" and "double dependent locality" for more granular location information. Royal Mail requires the "post town" to be included whenever possible.

#### **Countries without postal codes**

Not all countries use postal codes. For example, Angola and some other nations rely on descriptive addressing, which can make validation more challenging. Always design systems with flexibility to accommodate such exceptions.

## Postal code systems around the world

Postal codes also vary widely in format and granularity:

### Length and format

- **Europe:** Most countries use 4- or 5-digit codes. The UK and Netherlands use alphanumeric codes (e.g., `SW1A 1AA` in the UK).
- **North America:** The United States uses a 5-digit code, optionally followed by a 4-digit extension (e.g., `20500-0003`).
- **South America:** South America generally uses 4- or 5-digit codes. Argentina and Brazil use alphanumeric 8-digit codes, while Colombia and Ecuador use 6-digit systems.
- **Asia:** China and Japan use 5- or 6-digit codes, with the first few digits specifying the province or prefecture. and the rest to specify the city or district. South Korea and Vietnam use a 5-digit postal code system.
- **Africa:** Nigeria and Ghana use 6-digit systems, while South Africa and Kenya use 4-digit codes.

### Granularity

In many countries, postal codes cover relatively large areas, such as Saudi Arabia (which can cover an entire town). In some countries, postal codes cover very small areas, such as a small neighborhood or even a single address.

## Implications for field design

### General tips for handling international addresses

**Avoid rigid field labels and formats.** Using labels like "Street Address" or "Zip Code" can be confusing for users whose countries do not use these concepts. Instead, use more generic terms like "Address Line 1" and "Postal Code."

**Provide flexibility in input fields.** Allow multiple lines for addresses. Some addresses, especially in rural areas, can be long and descriptive. Avoid strict validation rules that assume specific formats (e.g., expecting numeric postal codes).

**Separate fields for granularity only if needed.** If you need specific parts of an address (e.g., city, postal code) for sorting or validation, use clear labels and instructions. For example:

```
- Address Line 1 (Street address or P.O. Box)
- Address Line 2 (Apartment, suite, unit, building, floor, etc.)
- City/Town
- State/Province/Region
- Postal Code
```

**Do not assume addresses will follow a specific order.** Be prepared to handle both "largest-to-smallest" and "smallest-to-largest" formats for address components.

**Allow non-ASCII characters.** Many addresses include characters from non-Latin scripts (e.g., Chinese, Japanese, Cyrillic). Use a Unicode encoding (such as UTF-8) in your pages, backend databases, and all software code in between.

**Accommodate countries without postal codes.** Ensure that postal codes are optional, if your target users include people from countries that do not use them.

### Supporting multilingual and localized addresses

If your website serves users from multiple countries, consider localizing the address form for each locale, such as displaying field labels in the user's language, adjusting the order of fields to match the address format of the user's country, and using address auto-completion tools that are aware of regional differences.

## Further reading

For further reading on related topics, see:

- [International Address Format: Structure and Normalization](https://www.geopostcodes.com/blog/international-address-data/)
- [Address](https://en.wikipedia.org/wiki/Address) on Wikipedia
- [Proposal for extending the autocomplete attribute](https://github.com/battre/autocomplete-attribute-explainer/)
- [Personal names around the world](https://www.w3.org/International/questions/qa-personal-names.en.html)
- [Universal Postal Union](https://www.upu.int/en/home)
