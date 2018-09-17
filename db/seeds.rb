100.times do
  Menu.create(
    menu_items: Faker::Commerce.product_name
  )
end