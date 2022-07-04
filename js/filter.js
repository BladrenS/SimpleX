/*let itemsId = document.querySelectorAll('.item__id');
   itemBlock = document.querySelectorAll('.table__items')*/

   /*alert(itemId);*/

/*function sortById(arr) {
   const temp = JSON.parse(JSON.stringify(arr));

   temp[1] = '10';
   console.log(itemId[1]);
};*/
/*sortById(itemId);*/

/*function sort(){
   var divs = document.querySelectorAll('.item__id');
   var divs_txt = [];
   for (var i =0; i<divs.length; i++){
       divs_txt[i] = divs[i].innerHTML;
   }
   console.log(divs_txt);

   function sortRule(i, ii) { 
   var reg = /(?!<div class=\"item__id\">)\d+(?=<\/div>)/;
   var price_i = parseFloat(i.match(reg));
   var price_ii = parseFloat(ii.match(reg));
   if (price_i > price_ii) return 1; 
   else if (price_i < price_ii) return -1; 
   else return 0; 
   }
   divs_txt.sort(sortRule);

   for (var i =0; i<divs_txt.length; i++){
       if ((i+1)%3==0) {divs_txt[i] = '<div class="table__item  no_margin_right">'+divs_txt[i]+'</div>';}
       else {divs_txt[i] = '<div class="table__item">'+divs_txt[i]+'</div>';}
   }

   var txt = divs_txt.join('');

   document.getElementById("table__items").innerHTML = txt;
}
   sort();
document.getElementById("sort").onclick = sort;*/
    var lst = document.getElementById('table__items');
    Object.defineProperties(lst, {
        _direct: {
            /**
             *  Направление сортировки
             *  0 - a->z
             *  1 - z->a
             */
            value: 0,
            writable: true
        },

        direct: {
            get: function () {
                return this._direct;
            },
            set: function (val) {
                this._direct = Math.abs(this._direct - 1);
            },
            enumerable: true,
            configurable: true
        },
        _dataArr: {
            /* Массив с данными */
            value: [],
            writable: true,
        },
        data: {
            /* Получить массив с данными */
            get: function () {
                let _that = this;
                if (!this._dataArr.length) {
                    /* Если массив пуст, получим данные */
                    [].map.call(this.children, function (_row) {
                        let _dataRow = {
                            title: _row.children[0].innerHTML,
                            amount: parseInt(_row.children[1].innerHTML),
                            element: _row
                        }
                        _that._dataArr.push(_dataRow);
                    });
                }
                /* В любом случае возвертаем массив */
                return this._dataArr;
            }
        },
        /*sortByAlphabet: {
            value: function () {
                let _that = this;
                this.data.sort(function (a, b) {
                    if (_that.direct) {
                        return a.title > b.title ? 1 : -1;
                    } else {
                        return a.title > b.title ? -1 : 1;
                    }
                });

                this.direct = true;
                this.drawRows();
            },
            writable: false
        },*/
        sortByAmount: {
            value: function () {
                let _that = this;
                this.data.sort(function (a, b) {
                    if (_that.direct) {
                        return a.amount > b.amount ? 1 : -1;
                    } else {
                        return a.amount > b.amount ? -1 : 1;
                    }
                });
                this.direct = true;
                this.drawRows();
            },
            writable: false
        },
        drawRows: {
            value: function () {
                for (let i = 0; i < this.data.length; i++) {
                    this.appendChild(this.removeChild(this.data[i].element));
                }
            },
            writable: false
        }
    });
    document.addEventListener('click', function (ev) {
        if (ev.target.hasAttribute('data-sort')) {
            switch (ev.target.getAttribute('data-sort')) {
                /*case 'alphabet':
                    lst.sortByAlphabet();
                    break;*/
                case 'amount':
                    lst.sortByAmount();
                    break;
            }
        }
    });