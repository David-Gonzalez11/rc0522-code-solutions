select "countries",
count("cities")  as "city in the country"
from "countries"
join "cities" using ("countryId")
group by "countries";
