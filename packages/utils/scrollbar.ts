export function scrollIntoView(container: HTMLElement, selected?: HTMLElement) {
    if (!selected) {
        container.scrollTop = 0;
        container.scrollLeft = 0;
        return;
    }

    // 获取元素相对于容器的位置
    const rect = selected.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // 计算元素相对于容器的偏移量
    const relativeTop = rect.top - containerRect.top + container.scrollTop;
    const relativeLeft = rect.left - containerRect.left + container.scrollLeft;

    const elementHeight = selected.offsetHeight;
    const elementWidth = selected.offsetWidth;
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;

    // 垂直滚动计算
    let scrollTop = container.scrollTop;

    // 如果元素在视口上方，滚动到顶部对齐
    if (relativeTop < container.scrollTop) {
        scrollTop = relativeTop;
    }
    // 如果元素在视口下方，滚动到底部对齐
    else if (relativeTop + elementHeight > container.scrollTop + containerHeight) {
        scrollTop = relativeTop;
    }

    // 水平滚动计算
    let scrollLeft = container.scrollLeft;

    // 如果元素在视口左侧，滚动到左侧对齐
    if (relativeLeft < container.scrollLeft) {
        scrollLeft = relativeLeft;
    }
    // 如果元素在视口右侧，滚动到右侧对齐
    else if (relativeLeft + elementWidth > container.scrollLeft + containerWidth) {
        scrollLeft = relativeLeft + elementWidth - containerWidth;
    }

    container.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: "smooth"
    });
}
