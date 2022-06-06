<template>
    <div>
        <!--#region kártya -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" >
                <div class="card kártya1" style="width: 18rem">
                    <p>kép</p>
                    <div class="card-body">
                        <h5
                            class="card-title cím"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <strong
                                >{Itemlink.ItemName}
                                <br />
                                {Itemlink.Unit}|{Itemlink.AlcoholContent}</strong
                            >
                        </h5>
                        <hr style="width: 100px; margin-left: 30%" />
                        <span style="color: #00a300"
                            ><i
                                class="bi bi-check-lg"
                                style="color: #00a300"></i
                            >Rendelhető</span
                        >
                        <hr style="width: 100px; margin-left: 30%" />
                        <p>{Itemlink.Price}</p>
                        <button type="button" class="btn btn-danger">
                            Kosárba
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--#endregion kártya vége -->
        <!--#region modal -->
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            cím
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img
                            class="arpadvilmospalnkamodal"
                            src="../images/arpad-alma-palinka-dd.jpg"
                            alt="" />
                        <p class="right">
                            Gyártó: {Brand}
                            <br />
                            Ital fajta: {CategoryName}
                            <br />
                            Kiszerelés: {unit}
                            <br />
                            Alkoholtartalom: {AlcoholContent}
                            <br />
                            kiszerelés fajtája: Palack
                            <br />
                            Szállítás idő: 1-4 munkanap
                            <br />
                            Állapot:
                            <span style="color: lightseagreen">Rendelhető</span>
                        </p>
                        <p>Átlag értékelés: {értékelés csillagban mutatva}</p>
                        <hr />
                        <span>Egységár: {itemprice}24.580,00 Ft/liter</span>
                        <br>
                        <table style="float:right">
                          <tr>
                            <td><input
                                style="max-width: 50px;"
                                type="number"
                                class="form-control"
                                value="1" /></td>
                            <td><button type="button" class="btn btn-danger">
                                Kosárba teszem
                            </button></td>
                          </tr>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Vissza
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--#endregion modal vége -->
    </div>
</template>

<script>
class Itemlink {
    constructor(
        id = null,
        ItemPriceId = null,
        CategoryId = null,
        ItemName = null,
        Image = null,
        Price = null,
        Unit = null,
        AlcoholContent = null,
        Brand = null
    ) {
        this.id = id;
        this.CategoryId = CategoryId;
        this.ItemName = ItemName;
        this.Image = Image;
        this.Unit = Unit;
        this.AlcoholContent = AlcoholContent;
        this.Brand = Brand;
        this.Price = Price;
        this.ItemPriceId = ItemPriceId;
    }
}
export default {
    name: "Fooldal",
    data() {
        return {
            itemLinks: [],
            itemsABC: [],
            itemlink: new Itemlink(),
            state: "view",
            stateTitle: null,
            itemId: null,
            embed: null,
        };
    },
    created() {
        this.GetItemsABC();
        this.getLinksToCard();
    },
    methods: {
        GetItemsABC() {
            let headers = new Headers();

            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/itemABC`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data.data);
                    this.itemsABC = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.itemsABC = [];
                });
        },
        getLinksToCard() {
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", "Bearer " + this.$root.$data.token);
            const url = `${this.$loginServer}/api/getlink`;
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((response) => response.json())
                .then((data) => {
                    this.itemlinks = data.data;
                })
                .catch((error) => {
                    console.error("Error:", error);
                    this.itemlinks = [];
                });
        },
    },
};
</script>

<style>
.arpadvilmospalnka {
    max-width: 100px;
    height: 215px;
    margin-left: 32%;
    margin-top: 22px;
    cursor: pointer;
}
.arpadvilmospalnkamodal {
    max-width: 200px;
    height: 400px;
    margin-left: 8%;
    margin-bottom: 15px;
}
.kártya1 {
    text-align: center;
}
.right {
    float: right;
}
.cím:hover {
    color: red;
    cursor: pointer;
}
</style>