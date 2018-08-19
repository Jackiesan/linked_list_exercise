require_relative 'spec_helper'

describe "Node class" do

  describe "Node instantiation" do
    before do
      @node = Node.new(1)
    end

    it "is an instance of a Node" do
      @node.must_be_kind_of Node
    end

    it "establishes the base data structures when instantiated" do
      [:data, :next].each do |prop|
        @node.must_respond_to prop
      end
    end

  end

end
