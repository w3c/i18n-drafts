# Address formats around the world

## Question

### How do address formats differ around the world, and what are the implications of those differences on the design of forms, databases, ontologies, etc. for the Web?

Address formats vary widely across the globe, with differences in structure, content, and the level of granularity. For authors and developers designing forms, databases, or systems that handle addresses, understanding these variations is crucial to avoid frustrating users from other countries. This article will introduce some of the key differences in address formats around the world and provide guidance on how to design systems that can handle them effectively.

This is not an exhaustive guide but aims to sensitize you to the complexities of international address formats and the challenges they pose for web design. As with [personal names](https://www.w3.org/International/questions/qa-personal-names), there is rarely a "perfect" solution, but awareness of these differences is the first step toward building more inclusive systems.

## Global variations in address formats

In most countries, an address consists of a combination of elements such as a street name, a house number, a postal code, and a locality name. However, the order, structure, and even the elements themselves can vary significantly between countries—and sometimes even within the same country. Below are some examples of how address formats differ around the world.

### Key differences in address formats

#### Street numbers and house numbering

**Order of street name and house number**

In many countries like the United States, United Kingdom, and France, the house number precedes the street name (e.g., "123 Main Street"). However, in Germany and Switzerland, the street name comes first, followed by the house number:

```
Sternengasse 3
35108 Allendorf
Deutschland
```

This difference has important implications for form design, as users from these countries may expect to enter their address in this order.

**Complex addressing systems**

In Colombia, instead of numbering houses sequentially along a street, addresses are based on the distance from the nearest intersecting street. For example, `Calle 122 # 18 – 15` means 122nd street, 15 metres from the intersection with 18th street.

Kyoto uses a similar system based around street intersections, with cardinal directions indicating the location relative to the intersection. For instance, the address of Kyoto Tower is:

```
京都市下京区 Kyōto-shi, Shimogyō-ku
烏丸七条下ル Karasuma-Shichijō-sagaru
東塩小路町 721-1 Higashi-Shiokōji 721-1
```

This second line means "south of the intersection of Karasuma and Shichijō streets".

Elsewhere in Japan, street names are often not used at all. Instead, buildings are referenced by block numbers, and their numbering may not follow geographic order (e.g., they can be the order in which buildings were constructed). For example, in the following address:

```
305-0051, Ibaraki, Tsukuba, Ninomiya 1-chōme, 6-13
```

305-0051 is the postal code, Ibaraki is the prefecture, Tsukuba is the city, Ninomiya 1-chōme is the district, 6 is the block number, and 13 is the building number.

#### Multi-line address components

In some countries like the United Kingdom, an address might include apartment/flat numbers, building names, and street information across multiple lines:

```
Flat 4, Danson House
63 Somerton Road
Market Drayton
UK
```

It's important to note that the street name and house number (63 Somerton Road) are not on the first line of this address. The first line contains the flat number and building name (Flat 4, Danson House). Additional information may also precede these details, such as "℅" (care of) followed by a person's or organization's name when mail is being delivered to someone at another person's address.

#### Order of address components

While most countries recommend that users format addresses in order from the most detailed part (such as street and house number) to the most general part (like city and province), there are some cases that slightly deviate from the general rule.

In China and Japan, addresses are written starting with the postal code, followed by the largest administrative area (e.g., province), and down to the smallest unit (e.g., room number). For example, here is an example of a Chinese address:

```
100083 北京市 海淀区 学院路 37号
```

(Postal code → City → District → Street → House number).

Russia often follow a "largest-to-smallest" order, starting with the country. For example:

```
Россия, Москва, Тверская улица, 16
```

(Country → City → Street → House number).

However, Russia also uses the "smallest-to-largest" order commonly seen internationally, so developers should account for both formats.

## Postal code systems around the world

Postal codes vary widely in format and granularity:

### Length and format

- **Europe:** Most countries use 4- or 5-digit codes. The UK uses alphanumeric codes with a specific grouping pattern (e.g., `SW1A 1AA` - always with a space between the outward and inward parts, never with hyphens). The Netherlands uses a similar alphanumeric pattern with a space (e.g., `1234 AB`).

- **North America:** The United States uses a 5-digit code, optionally followed by a hyphen and a 4-digit extension (e.g., `20500-0003`). Canada uses a 6-character alphanumeric format with a space in the middle (e.g., `K1A 0B1`).

- **South America:** Format patterns vary significantly. Brazil uses an 8-digit system with a hyphen (e.g., `70150-900`). Argentina's 8-character alphanumeric code is written as a single string without separators (e.g., `C1070AAB`). Colombia and Ecuador use 6-digit systems written as continuous numbers.

- **Asia:** China uses a 6-digit continuous numeric code without separators. Japan uses a 7-digit system with a hyphen after the first 3 digits (e.g., `100-0001`). South Korea's 5-digit system is written without separators, while India uses a 6-digit PIN code system with no separators.

- **Africa:** Nigeria and Ghana use 6-digit systems without separators, while South Africa uses a 4-digit code with no separators.

- **Oceania:** Australia and New Zealand use a 4-digit continuous numeric code.

### Granularity

In some countries, postal codes represent relatively large areas, such as an entire town. In others, they can be highly specific, covering small neighborhoods or even a single address.

### Countries without postal codes

Not all countries use postal codes. For example, Angola and some other nations do not use postal codes, which can make validation more challenging. Always design systems with flexibility to accommodate such exceptions.

## Implications for field design

### General tips for handling international addresses

**Avoid rigid field labels and formats.** Using labels like "Street Address" or "Zip Code" can be confusing for users whose countries do not use these concepts. Instead, use more generic terms like "Address Line 1" and "Postal Code."

**Provide flexibility in input fields.** Allow multiple lines for addresses. Some addresses, especially in rural areas, can be long and descriptive. Many addresses require multiple lines for apartment numbers, building names, "care of" designations, and other elements before the street information appears. Provide at least 3-4 address line fields to accommodate these variations. Avoid strict validation rules that assume specific formats (e.g., expecting numeric postal codes or that the street name must appear on the first line).

**Separate fields for granularity only if needed.** If you need specific parts of an address (e.g., city, postal code) for sorting or validation, use clear labels and instructions. For example:

```
- Address Line 1 (Street address or P.O. Box)
- Address Line 2 (Apartment, suite, unit, building, floor, etc.)
- City/Town
- State/Province/Region
- Postal Code
```

**Do not assume addresses will follow a specific order.** Be prepared to handle both "largest-to-smallest" and "smallest-to-largest" formats for address components. Remember that in countries like Germany and Switzerland, the street name comes before the house number, unlike in the US and UK.

**Allow non-ASCII characters.** Many addresses include characters from non-Latin scripts (e.g., Chinese, Japanese, Cyrillic). Use a Unicode encoding (such as UTF-8) in your pages, backend databases, and all software code in between.

**Accommodate countries without postal codes.** Ensure that postal codes are optional, if your target users include people from countries that do not use them.

### Supporting multilingual and localized addresses

If your website serves users from multiple countries, consider localizing the address form for each locale, such as displaying field labels in the user's language, adjusting the order of fields to match the address format of the user's country, and using address auto-completion tools that are aware of regional differences.

When possible, use the user's country and pre-configure the form to match that country's address format. For example, if a user selects Germany as their country, you might reorder fields to put street name before house number, or add appropriate fields for their addressing system.

### Postal codes considerations

When designing systems to handle postal codes, pay careful attention to the following points:

**Grouping and separators.** Some postal codes require specific separators (spaces, hyphens) at specific positions.

**Input formatting.** Consider whether to:
- Automatically format user input to add the correct separators
- Allow users to enter with or without separators and normalize on the server
- Provide visual cues about the expected format (e.g., placeholder text like "SW1A 1AA" for UK)

**Validation flexibility.** Allow for variations in how users might enter postal codes, including:
- With or without spaces/hyphens
- In uppercase or lowercase for alphanumeric systems
- With extra spaces at beginning or end

## Further reading

For further reading on related topics, see:

- [International Address Format: Structure and Normalization](https://www.geopostcodes.com/blog/international-address-data/)
- [Address](https://en.wikipedia.org/wiki/Address) on Wikipedia
- [Proposal for extending the autocomplete attribute](https://github.com/battre/autocomplete-attribute-explainer/)
- [Personal names around the world](https://www.w3.org/International/questions/qa-personal-names)
- [Universal Postal Union](https://www.upu.int/en/home)
