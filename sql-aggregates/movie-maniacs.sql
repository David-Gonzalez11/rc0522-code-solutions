select "firstName",
"lastName",
sum("amount") as "total paid"
from "customers"
join "payments" using ("customerId")
group by "firstName", "lastName"
order by "total paid" desc;
