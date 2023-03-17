// create a return type of this function, that will satisfy
// - the expected return type as shown in `loadData`
// - the return type `undefined` when `!resp.ok`
type GetDataReturnType = void
async function getData(url: string): GetDataReturnType {
  const resp = await fetch(url);
  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
}

function loadData() {
  getData('https://example.com').then(result => {
    //@ts-expect-error
    console.log(result.properties.join(', '));
  });
}
