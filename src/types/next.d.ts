import { NextPage } from "next";
import React from "react";

export type ExtendedNextPage = NextPage<T> & { Layout?: React.FC };
