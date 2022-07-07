select "line1",
       "cities"."name" as "city",
       "district",
       "countries"."name" as "countryName"
 from "addresses"
 join "cities" using ("cityId")
 join "countries" using ("countryId");
