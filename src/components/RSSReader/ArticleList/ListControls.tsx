import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface ListControlsProps {
  searchQuery?: string;
  sortBy?: string;
  showUnreadOnly?: boolean;
  showStarredOnly?: boolean;
  selectedSource?: string;
  sources?: string[];
  onSearchChange?: (query: string) => void;
  onSortChange?: (value: string) => void;
  onUnreadFilterChange?: (value: boolean) => void;
  onStarredFilterChange?: (value: boolean) => void;
  onSourceChange?: (value: string) => void;
}

const ListControls = ({
  searchQuery = "",
  sortBy = "date",
  showUnreadOnly = false,
  showStarredOnly = false,
  selectedSource = "all",
  sources = ["all", "TechCrunch", "Dev.to", "Medium"],
  onSearchChange = () => {},
  onSortChange = () => {},
  onUnreadFilterChange = () => {},
  onStarredFilterChange = () => {},
  onSourceChange = () => {},
}: ListControlsProps) => {
  return (
    <div className="p-3 border-b bg-background sticky top-0 z-10">
      {/* Search Row */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[110px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="date">Latest</SelectItem>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="source">Source</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72" align="end">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Filters</h4>
                <p className="text-sm text-muted-foreground">
                  Customize your article view
                </p>
              </div>
              <Separator />

              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="unread-filter"
                    className="flex flex-col gap-1"
                  >
                    <span>Unread only</span>
                    <span className="font-normal text-xs text-muted-foreground">
                      Show only unread articles
                    </span>
                  </Label>
                  <Switch
                    id="unread-filter"
                    checked={showUnreadOnly}
                    onCheckedChange={onUnreadFilterChange}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="starred-filter"
                    className="flex flex-col gap-1"
                  >
                    <span>Starred only</span>
                    <span className="font-normal text-xs text-muted-foreground">
                      Show only starred articles
                    </span>
                  </Label>
                  <Switch
                    id="starred-filter"
                    checked={showStarredOnly}
                    onCheckedChange={onStarredFilterChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Source</Label>
                  <Select value={selectedSource} onValueChange={onSourceChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      {sources.map((source) => (
                        <SelectItem key={source} value={source}>
                          {source === "all" ? "All Sources" : source}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ListControls;
