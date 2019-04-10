const { DeliveryClient } = require('kentico-cloud-delivery');

describe('Delivery sdk', () => {
  it("load articles", async () => {
    const client = new DeliveryClient({ projectId: "975bf280-fd91-488c-994c-2f04416e5ee3" });

    const result = await client.items()
      .type("article")
      .getPromise();

    expect(result).toHaveProperty('items');
    expect(result.items).toHaveLength(6);
    result.items.forEach(item => console.log(item.elements.title.value)); // Just to see the titles in log
    // expect(result).toMatchSnapshot(); // Just a snapshot sample (https://jestjs.io/docs/en/snapshot-testing)
  })
})