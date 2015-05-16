var Name = (function () {
    function Name(first, last) {
        this.first = first;
        this.last = last;
    }
    Name.prototype.full = function () {
        return this.first + ' ' + this.last;
    };
    return Name;
})();
var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    return Player;
})();
var terry = new Player(new Name('Terry', 'Rosen'));
console.log('terry: ', terry);
console.log('terry: ', terry.name.full());
