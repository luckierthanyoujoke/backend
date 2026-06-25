"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommaSeparatedFilter = parseCommaSeparatedFilter;
function parseCommaSeparatedFilter(raw) {
    if (!raw?.trim())
        return [];
    return raw
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
}
//# sourceMappingURL=feed-filters.util.js.map