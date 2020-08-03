const detectCollision = (el, target) => {
    if (el.position.x < target.position.x + target.size &&
        el.position.x + el.size > target.position.x &&
        el.position.y < target.position.y + target.size &&
        el.position.y + el.size > target.position.y) {
            return true;
    }
    return false;    
}